import AmeriaPvpServerPolandKeywordPage, { generateMetadata } from './ameria-pvp-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaPvpServerPolandKeywordPage />;
}
