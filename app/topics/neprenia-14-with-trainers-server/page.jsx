import Neprenia14WithTrainersServerKeywordPage, { generateMetadata } from './neprenia-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14WithTrainersServerKeywordPage />;
}
