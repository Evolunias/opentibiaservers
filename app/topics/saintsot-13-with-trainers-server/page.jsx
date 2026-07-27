import Saintsot13WithTrainersServerKeywordPage, { generateMetadata } from './saintsot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot13WithTrainersServerKeywordPage />;
}
