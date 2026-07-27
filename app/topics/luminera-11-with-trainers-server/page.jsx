import Luminera11WithTrainersServerKeywordPage, { generateMetadata } from './luminera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera11WithTrainersServerKeywordPage />;
}
