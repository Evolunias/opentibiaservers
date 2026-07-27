import PvpeServersEuropeKeywordPage, { generateMetadata } from './pvpe-servers-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeServersEuropeKeywordPage />;
}
