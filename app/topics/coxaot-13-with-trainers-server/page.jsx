import Coxaot13WithTrainersServerKeywordPage, { generateMetadata } from './coxaot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Coxaot13WithTrainersServerKeywordPage />;
}
