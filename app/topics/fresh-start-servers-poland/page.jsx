import FreshStartServersPolandKeywordPage, { generateMetadata } from './fresh-start-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersPolandKeywordPage />;
}
