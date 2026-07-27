import Luminera81WithTrainersServerKeywordPage, { generateMetadata } from './luminera-8-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera81WithTrainersServerKeywordPage />;
}
