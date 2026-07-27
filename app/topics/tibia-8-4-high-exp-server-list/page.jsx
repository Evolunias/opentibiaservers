import Tibia84HighExpServerListKeywordPage, { generateMetadata } from './tibia-8-4-high-exp-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84HighExpServerListKeywordPage />;
}
