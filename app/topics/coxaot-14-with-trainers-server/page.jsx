import Coxaot14WithTrainersServerKeywordPage, { generateMetadata } from './coxaot-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot14WithTrainersServerKeywordPage />;
}
