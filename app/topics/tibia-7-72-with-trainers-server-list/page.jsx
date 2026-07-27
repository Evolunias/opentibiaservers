import Tibia772WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-7-72-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithTrainersServerListKeywordPage />;
}
