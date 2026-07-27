import UnlinePvpKeywordPage, { generateMetadata } from './unline-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlinePvpKeywordPage />;
}
