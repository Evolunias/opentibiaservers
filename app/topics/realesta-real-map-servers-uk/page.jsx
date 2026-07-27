import RealestaRealMapServersUkKeywordPage, { generateMetadata } from './realesta-real-map-servers-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaRealMapServersUkKeywordPage />;
}
