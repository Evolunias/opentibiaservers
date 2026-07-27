import Coxaot15WithTrainersServerKeywordPage, { generateMetadata } from './coxaot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot15WithTrainersServerKeywordPage />;
}
