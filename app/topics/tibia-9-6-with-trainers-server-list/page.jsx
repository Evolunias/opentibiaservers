import Tibia96WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersServerListKeywordPage />;
}
