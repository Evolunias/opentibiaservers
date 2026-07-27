import Tibia80WithTrainersForumKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersForumKeywordPage />;
}
