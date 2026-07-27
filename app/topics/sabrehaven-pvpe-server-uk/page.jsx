import SabrehavenPvpeServerUkKeywordPage, { generateMetadata } from './sabrehaven-pvpe-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPvpeServerUkKeywordPage />;
}
