import MidhemPvpKeywordPage, { generateMetadata } from './midhem-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemPvpKeywordPage />;
}
