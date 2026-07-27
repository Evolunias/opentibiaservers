import SaintsotMarketKeywordPage, { generateMetadata } from './saintsot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SaintsotMarketKeywordPage />;
}
