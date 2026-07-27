import NonPvpNepreniaServerKeywordPage, { generateMetadata } from './non-pvp-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpNepreniaServerKeywordPage />;
}
