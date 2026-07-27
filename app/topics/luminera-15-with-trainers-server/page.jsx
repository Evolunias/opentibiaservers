import Luminera15WithTrainersServerKeywordPage, { generateMetadata } from './luminera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera15WithTrainersServerKeywordPage />;
}
