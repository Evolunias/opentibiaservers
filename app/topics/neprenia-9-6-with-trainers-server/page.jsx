import Neprenia96WithTrainersServerKeywordPage, { generateMetadata } from './neprenia-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96WithTrainersServerKeywordPage />;
}
