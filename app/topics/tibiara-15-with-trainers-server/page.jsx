import Tibiara15WithTrainersServerKeywordPage, { generateMetadata } from './tibiara-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15WithTrainersServerKeywordPage />;
}
