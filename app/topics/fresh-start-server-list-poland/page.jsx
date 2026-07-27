import FreshStartServerListPolandKeywordPage, { generateMetadata } from './fresh-start-server-list-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerListPolandKeywordPage />;
}
