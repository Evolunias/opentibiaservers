import NonPvpClassickDrakoriaServerKeywordPage, { generateMetadata } from './non-pvp-classick-drakoria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClassickDrakoriaServerKeywordPage />;
}
