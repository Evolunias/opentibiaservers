import Tibia13WithTrainersForumKeywordPage, { generateMetadata } from './tibia-13-with-trainers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersForumKeywordPage />;
}
