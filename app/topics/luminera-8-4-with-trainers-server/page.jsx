import Luminera84WithTrainersServerKeywordPage, { generateMetadata } from './luminera-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera84WithTrainersServerKeywordPage />;
}
