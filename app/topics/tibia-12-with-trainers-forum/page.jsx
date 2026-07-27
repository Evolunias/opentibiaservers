import Tibia12WithTrainersForumKeywordPage, { generateMetadata } from './tibia-12-with-trainers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersForumKeywordPage />;
}
