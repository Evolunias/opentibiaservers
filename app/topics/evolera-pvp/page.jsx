import EvoleraPvpKeywordPage, { generateMetadata } from './evolera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraPvpKeywordPage />;
}
