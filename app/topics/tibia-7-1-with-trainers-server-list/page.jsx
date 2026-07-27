import Tibia71WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersServerListKeywordPage />;
}
