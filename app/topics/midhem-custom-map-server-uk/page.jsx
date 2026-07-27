import MidhemCustomMapServerUkKeywordPage, { generateMetadata } from './midhem-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemCustomMapServerUkKeywordPage />;
}
