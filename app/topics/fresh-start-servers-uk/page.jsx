import FreshStartServersUkKeywordPage, { generateMetadata } from './fresh-start-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersUkKeywordPage />;
}
