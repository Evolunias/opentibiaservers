import Cyntara13WithTrainersServerKeywordPage, { generateMetadata } from './cyntara-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara13WithTrainersServerKeywordPage />;
}
