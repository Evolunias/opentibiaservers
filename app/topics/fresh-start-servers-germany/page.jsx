import FreshStartServersGermanyKeywordPage, { generateMetadata } from './fresh-start-servers-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersGermanyKeywordPage />;
}
