import ThorniaPvpKeywordPage, { generateMetadata } from './thornia-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaPvpKeywordPage />;
}
