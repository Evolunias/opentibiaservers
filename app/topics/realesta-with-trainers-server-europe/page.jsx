import RealestaWithTrainersServerEuropeKeywordPage, { generateMetadata } from './realesta-with-trainers-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWithTrainersServerEuropeKeywordPage />;
}
