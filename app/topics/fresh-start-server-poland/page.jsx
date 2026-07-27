import FreshStartServerPolandKeywordPage, { generateMetadata } from './fresh-start-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServerPolandKeywordPage />;
}
