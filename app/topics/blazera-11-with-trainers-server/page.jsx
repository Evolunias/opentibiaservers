import Blazera11WithTrainersServerKeywordPage, { generateMetadata } from './blazera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera11WithTrainersServerKeywordPage />;
}
