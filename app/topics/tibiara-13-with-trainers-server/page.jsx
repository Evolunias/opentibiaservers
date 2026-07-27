import Tibiara13WithTrainersServerKeywordPage, { generateMetadata } from './tibiara-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13WithTrainersServerKeywordPage />;
}
