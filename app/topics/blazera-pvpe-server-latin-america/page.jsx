import BlazeraPvpeServerLatinAmericaKeywordPage, { generateMetadata } from './blazera-pvpe-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraPvpeServerLatinAmericaKeywordPage />;
}
