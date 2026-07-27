import Blazera15WithTrainersServerKeywordPage, { generateMetadata } from './blazera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15WithTrainersServerKeywordPage />;
}
