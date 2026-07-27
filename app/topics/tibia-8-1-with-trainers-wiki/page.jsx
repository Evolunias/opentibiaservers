import Tibia81WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersWikiKeywordPage />;
}
