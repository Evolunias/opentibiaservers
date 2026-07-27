import RealestaWithTrainersServerPolandKeywordPage, { generateMetadata } from './realesta-with-trainers-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaWithTrainersServerPolandKeywordPage />;
}
