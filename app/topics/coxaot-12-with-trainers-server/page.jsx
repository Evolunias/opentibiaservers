import Coxaot12WithTrainersServerKeywordPage, { generateMetadata } from './coxaot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot12WithTrainersServerKeywordPage />;
}
