import Thaisot12WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot12WithTrainersServerKeywordPage />;
}
