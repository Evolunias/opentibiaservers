import AmeriaNonPvpServerUsaKeywordPage, { generateMetadata } from './ameria-non-pvp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaNonPvpServerUsaKeywordPage />;
}
