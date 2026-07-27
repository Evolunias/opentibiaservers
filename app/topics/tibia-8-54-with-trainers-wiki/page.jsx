import Tibia854WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-8-54-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithTrainersWikiKeywordPage />;
}
