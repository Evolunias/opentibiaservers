import WithActivePlayersMidhemServerKeywordPage, { generateMetadata } from './with-active-players-midhem-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersMidhemServerKeywordPage />;
}
