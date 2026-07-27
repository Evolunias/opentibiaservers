import Tibiara11WithTrainersServerKeywordPage, { generateMetadata } from './tibiara-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11WithTrainersServerKeywordPage />;
}
