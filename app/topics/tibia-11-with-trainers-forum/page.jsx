import Tibia11WithTrainersForumKeywordPage, { generateMetadata } from './tibia-11-with-trainers-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersForumKeywordPage />;
}
