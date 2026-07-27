import TopMidhemPrivateServerKeywordPage, { generateMetadata } from './top-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMidhemPrivateServerKeywordPage />;
}
