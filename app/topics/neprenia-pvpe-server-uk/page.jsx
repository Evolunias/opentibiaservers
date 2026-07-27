import NepreniaPvpeServerUkKeywordPage, { generateMetadata } from './neprenia-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerUkKeywordPage />;
}
