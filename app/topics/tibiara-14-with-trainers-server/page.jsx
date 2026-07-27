import Tibiara14WithTrainersServerKeywordPage, { generateMetadata } from './tibiara-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14WithTrainersServerKeywordPage />;
}
