import Tibia76WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersServerListKeywordPage />;
}
