import Saintsot11WithTrainersServerKeywordPage, { generateMetadata } from './saintsot-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Saintsot11WithTrainersServerKeywordPage />;
}
