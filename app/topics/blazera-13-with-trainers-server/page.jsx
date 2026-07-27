import Blazera13WithTrainersServerKeywordPage, { generateMetadata } from './blazera-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13WithTrainersServerKeywordPage />;
}
