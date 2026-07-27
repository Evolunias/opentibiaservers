import Neprenia13WithTrainersServerKeywordPage, { generateMetadata } from './neprenia-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13WithTrainersServerKeywordPage />;
}
