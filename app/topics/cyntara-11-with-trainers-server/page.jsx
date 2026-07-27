import Cyntara11WithTrainersServerKeywordPage, { generateMetadata } from './cyntara-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara11WithTrainersServerKeywordPage />;
}
