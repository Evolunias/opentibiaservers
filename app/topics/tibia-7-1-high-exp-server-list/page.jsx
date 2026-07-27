import Tibia71HighExpServerListKeywordPage, { generateMetadata } from './tibia-7-1-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71HighExpServerListKeywordPage />;
}
