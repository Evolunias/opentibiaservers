import PvpeMidhemServerKeywordPage, { generateMetadata } from './pvpe-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeMidhemServerKeywordPage />;
}
