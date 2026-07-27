import Sabrehaven13WithTrainersServerKeywordPage, { generateMetadata } from './sabrehaven-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Sabrehaven13WithTrainersServerKeywordPage />;
}
