import NepreniaPvpeServerEuropeKeywordPage, { generateMetadata } from './neprenia-pvpe-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerEuropeKeywordPage />;
}
