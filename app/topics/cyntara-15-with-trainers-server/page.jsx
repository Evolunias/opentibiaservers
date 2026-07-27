import Cyntara15WithTrainersServerKeywordPage, { generateMetadata } from './cyntara-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Cyntara15WithTrainersServerKeywordPage />;
}
