import FreshStartCarlinotServerKeywordPage, { generateMetadata } from './fresh-start-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotServerKeywordPage />;
}
