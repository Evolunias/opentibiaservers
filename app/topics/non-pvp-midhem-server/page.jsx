import NonPvpMidhemServerKeywordPage, { generateMetadata } from './non-pvp-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpMidhemServerKeywordPage />;
}
