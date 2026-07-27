import LowExpServerListGermanyKeywordPage, { generateMetadata } from './low-exp-server-list-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListGermanyKeywordPage />;
}
