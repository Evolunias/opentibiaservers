import MidhemPvpServerUkKeywordPage, { generateMetadata } from './midhem-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpServerUkKeywordPage />;
}
