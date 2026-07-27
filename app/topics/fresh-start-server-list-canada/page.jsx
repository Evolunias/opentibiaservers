import FreshStartServerListCanadaKeywordPage, { generateMetadata } from './fresh-start-server-list-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListCanadaKeywordPage />;
}
