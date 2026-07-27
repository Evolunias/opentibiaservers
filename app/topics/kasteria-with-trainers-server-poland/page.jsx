import KasteriaWithTrainersServerPolandKeywordPage, { generateMetadata } from './kasteria-with-trainers-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithTrainersServerPolandKeywordPage />;
}
