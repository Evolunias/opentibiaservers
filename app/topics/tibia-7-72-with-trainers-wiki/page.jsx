import Tibia772WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-7-72-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithTrainersWikiKeywordPage />;
}
