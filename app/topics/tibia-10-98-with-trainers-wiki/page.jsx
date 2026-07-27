import Tibia1098WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-10-98-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithTrainersWikiKeywordPage />;
}
