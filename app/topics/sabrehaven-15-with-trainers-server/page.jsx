import Sabrehaven15WithTrainersServerKeywordPage, { generateMetadata } from './sabrehaven-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven15WithTrainersServerKeywordPage />;
}
