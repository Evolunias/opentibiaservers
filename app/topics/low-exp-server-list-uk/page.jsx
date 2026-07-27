import LowExpServerListUkKeywordPage, { generateMetadata } from './low-exp-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpServerListUkKeywordPage />;
}
