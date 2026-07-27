import Tibia86HighExpServerListKeywordPage, { generateMetadata } from './tibia-8-6-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86HighExpServerListKeywordPage />;
}
