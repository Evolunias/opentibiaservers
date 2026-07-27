import Tibia84WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersWikiKeywordPage />;
}
