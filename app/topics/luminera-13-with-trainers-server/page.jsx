import Luminera13WithTrainersServerKeywordPage, { generateMetadata } from './luminera-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera13WithTrainersServerKeywordPage />;
}
