import Tibia14WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-14-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersWikiKeywordPage />;
}
