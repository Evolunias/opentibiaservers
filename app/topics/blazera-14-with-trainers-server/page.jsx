import Blazera14WithTrainersServerKeywordPage, { generateMetadata } from './blazera-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14WithTrainersServerKeywordPage />;
}
