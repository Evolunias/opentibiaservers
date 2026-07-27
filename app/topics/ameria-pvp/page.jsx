import AmeriaPvpKeywordPage, { generateMetadata } from './ameria-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpKeywordPage />;
}
