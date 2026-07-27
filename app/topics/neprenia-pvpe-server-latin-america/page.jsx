import NepreniaPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './neprenia-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpeServerLatinAmericaKeywordPage />;
}
