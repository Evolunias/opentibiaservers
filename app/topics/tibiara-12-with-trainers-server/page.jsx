import Tibiara12WithTrainersServerKeywordPage, { generateMetadata } from './tibiara-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12WithTrainersServerKeywordPage />;
}
