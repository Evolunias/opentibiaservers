import Medivia13WithTrainersServerKeywordPage, { generateMetadata } from './medivia-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13WithTrainersServerKeywordPage />;
}
