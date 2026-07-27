import MidhemCustomMapServerGermanyKeywordPage, { generateMetadata } from './midhem-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemCustomMapServerGermanyKeywordPage />;
}
