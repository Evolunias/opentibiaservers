import Tibia100HighExpServerListKeywordPage, { generateMetadata } from './tibia-10-0-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100HighExpServerListKeywordPage />;
}
