import RealMapServerListUkKeywordPage, { generateMetadata } from './real-map-server-list-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapServerListUkKeywordPage />;
}
