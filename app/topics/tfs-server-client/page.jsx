import TfsServerClientKeywordPage, { generateMetadata } from './tfs-server-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerClientKeywordPage />;
}
