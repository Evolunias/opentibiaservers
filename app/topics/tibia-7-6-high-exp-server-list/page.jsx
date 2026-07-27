import Tibia76HighExpServerListKeywordPage, { generateMetadata } from './tibia-7-6-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76HighExpServerListKeywordPage />;
}
