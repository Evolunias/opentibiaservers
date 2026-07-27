import TheForgottenServerPvpKeywordPage, { generateMetadata } from './the-forgotten-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TheForgottenServerPvpKeywordPage />;
}
