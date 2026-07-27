import KasteriaWithTrainersServerEuropeKeywordPage, { generateMetadata } from './kasteria-with-trainers-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaWithTrainersServerEuropeKeywordPage />;
}
