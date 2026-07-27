import Tibia71WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersWikiKeywordPage />;
}
