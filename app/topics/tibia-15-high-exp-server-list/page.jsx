import Tibia15HighExpServerListKeywordPage, { generateMetadata } from './tibia-15-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15HighExpServerListKeywordPage />;
}
