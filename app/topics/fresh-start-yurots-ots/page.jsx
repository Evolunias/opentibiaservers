import FreshStartYurotsOtsKeywordPage, { generateMetadata } from './fresh-start-yurots-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartYurotsOtsKeywordPage />;
}
