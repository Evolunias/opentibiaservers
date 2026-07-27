import Tibia86WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersWikiKeywordPage />;
}
