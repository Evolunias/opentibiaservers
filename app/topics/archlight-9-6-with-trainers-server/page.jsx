import Archlight96WithTrainersServerKeywordPage, { generateMetadata } from './archlight-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight96WithTrainersServerKeywordPage />;
}
