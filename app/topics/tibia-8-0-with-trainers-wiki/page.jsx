import Tibia80WithTrainersWikiKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersWikiKeywordPage />;
}
