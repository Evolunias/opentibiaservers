import Archlight14WithTrainersServerKeywordPage, { generateMetadata } from './archlight-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14WithTrainersServerKeywordPage />;
}
