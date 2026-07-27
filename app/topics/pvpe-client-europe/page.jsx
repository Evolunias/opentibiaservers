import PvpeClientEuropeKeywordPage, { generateMetadata } from './pvpe-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeClientEuropeKeywordPage />;
}
