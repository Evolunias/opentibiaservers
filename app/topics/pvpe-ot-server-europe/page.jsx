import PvpeOtServerEuropeKeywordPage, { generateMetadata } from './pvpe-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeOtServerEuropeKeywordPage />;
}
