import LowrateMidhemPrivateServerKeywordPage, { generateMetadata } from './lowrate-midhem-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMidhemPrivateServerKeywordPage />;
}
