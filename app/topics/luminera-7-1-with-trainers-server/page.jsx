import Luminera71WithTrainersServerKeywordPage, { generateMetadata } from './luminera-7-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera71WithTrainersServerKeywordPage />;
}
