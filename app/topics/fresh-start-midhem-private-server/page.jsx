import FreshStartMidhemPrivateServerKeywordPage, { generateMetadata } from './fresh-start-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMidhemPrivateServerKeywordPage />;
}
