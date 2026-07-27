import Unline13WithTrainersServerKeywordPage, { generateMetadata } from './unline-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Unline13WithTrainersServerKeywordPage />;
}
