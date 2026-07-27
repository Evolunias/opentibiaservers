import Luminera76WithTrainersServerKeywordPage, { generateMetadata } from './luminera-7-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera76WithTrainersServerKeywordPage />;
}
