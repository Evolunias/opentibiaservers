import FreshStartServersBrazilKeywordPage, { generateMetadata } from './fresh-start-servers-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartServersBrazilKeywordPage />;
}
