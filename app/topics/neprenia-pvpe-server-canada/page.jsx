import NepreniaPvpeServerCanadaKeywordPage, { generateMetadata } from './neprenia-pvpe-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerCanadaKeywordPage />;
}
