import Archlight11WithTrainersServerKeywordPage, { generateMetadata } from './archlight-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11WithTrainersServerKeywordPage />;
}
