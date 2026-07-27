import NonPvpKasteriaServerKeywordPage, { generateMetadata } from './non-pvp-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpKasteriaServerKeywordPage />;
}
