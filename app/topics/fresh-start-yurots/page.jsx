import FreshStartYurotsKeywordPage, { generateMetadata } from './fresh-start-yurots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsKeywordPage />;
}
