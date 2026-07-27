import TfsServerGermanyKeywordPage, { generateMetadata } from './tfs-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerGermanyKeywordPage />;
}
