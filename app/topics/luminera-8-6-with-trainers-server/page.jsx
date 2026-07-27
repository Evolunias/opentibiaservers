import Luminera86WithTrainersServerKeywordPage, { generateMetadata } from './luminera-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera86WithTrainersServerKeywordPage />;
}
