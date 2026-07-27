import HighExpServerListGermanyKeywordPage, { generateMetadata } from './high-exp-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpServerListGermanyKeywordPage />;
}
