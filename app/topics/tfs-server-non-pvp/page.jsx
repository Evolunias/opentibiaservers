import TfsServerNonPvpKeywordPage, { generateMetadata } from './tfs-server-non-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerNonPvpKeywordPage />;
}
