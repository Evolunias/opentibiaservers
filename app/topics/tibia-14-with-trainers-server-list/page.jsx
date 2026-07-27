import Tibia14WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-14-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersServerListKeywordPage />;
}
