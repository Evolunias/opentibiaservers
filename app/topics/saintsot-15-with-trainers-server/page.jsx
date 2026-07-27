import Saintsot15WithTrainersServerKeywordPage, { generateMetadata } from './saintsot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot15WithTrainersServerKeywordPage />;
}
