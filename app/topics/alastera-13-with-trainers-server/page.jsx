import Alastera13WithTrainersServerKeywordPage, { generateMetadata } from './alastera-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13WithTrainersServerKeywordPage />;
}
