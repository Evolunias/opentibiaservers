import Tibia81HighExpServerListKeywordPage, { generateMetadata } from './tibia-8-1-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81HighExpServerListKeywordPage />;
}
