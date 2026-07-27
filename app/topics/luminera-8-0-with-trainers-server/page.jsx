import Luminera80WithTrainersServerKeywordPage, { generateMetadata } from './luminera-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera80WithTrainersServerKeywordPage />;
}
