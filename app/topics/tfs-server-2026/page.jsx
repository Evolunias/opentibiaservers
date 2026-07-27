import TfsServer2026KeywordPage, { generateMetadata } from './tfs-server-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServer2026KeywordPage />;
}
