import Neprenia11WithTrainersServerKeywordPage, { generateMetadata } from './neprenia-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11WithTrainersServerKeywordPage />;
}
