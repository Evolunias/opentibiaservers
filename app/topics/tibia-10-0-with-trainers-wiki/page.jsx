import Tibia100WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersWikiKeywordPage />;
}
