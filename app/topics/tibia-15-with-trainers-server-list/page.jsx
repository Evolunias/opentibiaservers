import Tibia15WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-15-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersServerListKeywordPage />;
}
