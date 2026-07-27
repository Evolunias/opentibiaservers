import Tibia11WithTrainersServerListKeywordPage, { generateMetadata } from './tibia-11-with-trainers-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersServerListKeywordPage />;
}
