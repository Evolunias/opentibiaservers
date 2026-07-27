import Tibia84WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersServerListKeywordPage />;
}
