import TfsServerListKeywordPage, { generateMetadata } from './tfs-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerListKeywordPage />;
}
