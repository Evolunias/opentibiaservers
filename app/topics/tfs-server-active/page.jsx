import TfsServerActiveKeywordPage, { generateMetadata } from './tfs-server-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerActiveKeywordPage />;
}
