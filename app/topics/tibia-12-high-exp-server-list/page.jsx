import Tibia12HighExpServerListKeywordPage, { generateMetadata } from './tibia-12-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12HighExpServerListKeywordPage />;
}
