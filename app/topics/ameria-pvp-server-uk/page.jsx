import AmeriaPvpServerUkKeywordPage, { generateMetadata } from './ameria-pvp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpServerUkKeywordPage />;
}
