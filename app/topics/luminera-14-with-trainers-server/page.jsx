import Luminera14WithTrainersServerKeywordPage, { generateMetadata } from './luminera-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Luminera14WithTrainersServerKeywordPage />;
}
