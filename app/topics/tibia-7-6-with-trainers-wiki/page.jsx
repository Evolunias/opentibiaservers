import Tibia76WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersWikiKeywordPage />;
}
