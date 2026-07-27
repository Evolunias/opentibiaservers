import TibiaraPvpServerUkKeywordPage, { generateMetadata } from './tibiara-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraPvpServerUkKeywordPage />;
}
