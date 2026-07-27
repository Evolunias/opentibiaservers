import Sabrehaven12WithTrainersServerKeywordPage, { generateMetadata } from './sabrehaven-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven12WithTrainersServerKeywordPage />;
}
