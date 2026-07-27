import Saintsot12WithTrainersServerKeywordPage, { generateMetadata } from './saintsot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot12WithTrainersServerKeywordPage />;
}
