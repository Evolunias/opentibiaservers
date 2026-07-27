import Tibia11WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-11-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersWikiKeywordPage />;
}
