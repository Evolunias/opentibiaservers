import Coxaot11WithTrainersServerKeywordPage, { generateMetadata } from './coxaot-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot11WithTrainersServerKeywordPage />;
}
