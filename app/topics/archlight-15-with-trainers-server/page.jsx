import Archlight15WithTrainersServerKeywordPage, { generateMetadata } from './archlight-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15WithTrainersServerKeywordPage />;
}
