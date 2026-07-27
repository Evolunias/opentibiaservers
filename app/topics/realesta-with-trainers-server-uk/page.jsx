import RealestaWithTrainersServerUkKeywordPage, { generateMetadata } from './realesta-with-trainers-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWithTrainersServerUkKeywordPage />;
}
