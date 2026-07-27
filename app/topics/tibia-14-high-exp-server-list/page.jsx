import Tibia14HighExpServerListKeywordPage, { generateMetadata } from './tibia-14-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14HighExpServerListKeywordPage />;
}
