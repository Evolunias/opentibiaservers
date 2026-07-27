import TibiaraPvpeServerUkKeywordPage, { generateMetadata } from './tibiara-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpeServerUkKeywordPage />;
}
