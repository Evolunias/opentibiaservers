import Alastera11WithTrainersServerKeywordPage, { generateMetadata } from './alastera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera11WithTrainersServerKeywordPage />;
}
