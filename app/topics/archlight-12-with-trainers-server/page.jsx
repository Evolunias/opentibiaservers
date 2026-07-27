import Archlight12WithTrainersServerKeywordPage, { generateMetadata } from './archlight-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12WithTrainersServerKeywordPage />;
}
