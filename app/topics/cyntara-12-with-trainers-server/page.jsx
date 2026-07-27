import Cyntara12WithTrainersServerKeywordPage, { generateMetadata } from './cyntara-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara12WithTrainersServerKeywordPage />;
}
