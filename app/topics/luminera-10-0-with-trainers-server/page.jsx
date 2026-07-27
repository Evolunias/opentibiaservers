import Luminera100WithTrainersServerKeywordPage, { generateMetadata } from './luminera-10-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera100WithTrainersServerKeywordPage />;
}
