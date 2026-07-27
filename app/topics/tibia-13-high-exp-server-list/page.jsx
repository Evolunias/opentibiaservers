import Tibia13HighExpServerListKeywordPage, { generateMetadata } from './tibia-13-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13HighExpServerListKeywordPage />;
}
