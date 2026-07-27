import FreshStartClassicusOtsKeywordPage, { generateMetadata } from './fresh-start-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusOtsKeywordPage />;
}
