import Tibia96HighExpServerListKeywordPage, { generateMetadata } from './tibia-9-6-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96HighExpServerListKeywordPage />;
}
