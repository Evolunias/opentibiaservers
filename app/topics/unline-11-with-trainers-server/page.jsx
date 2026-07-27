import Unline11WithTrainersServerKeywordPage, { generateMetadata } from './unline-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline11WithTrainersServerKeywordPage />;
}
