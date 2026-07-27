import Luminera96WithTrainersServerKeywordPage, { generateMetadata } from './luminera-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera96WithTrainersServerKeywordPage />;
}
