import TfsServerKeywordPage, { generateMetadata } from './tfs-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerKeywordPage />;
}
