import Archlight13WithTrainersServerKeywordPage, { generateMetadata } from './archlight-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13WithTrainersServerKeywordPage />;
}
