import Alastera15WithTrainersServerKeywordPage, { generateMetadata } from './alastera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15WithTrainersServerKeywordPage />;
}
