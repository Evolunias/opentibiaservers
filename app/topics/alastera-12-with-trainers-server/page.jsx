import Alastera12WithTrainersServerKeywordPage, { generateMetadata } from './alastera-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12WithTrainersServerKeywordPage />;
}
