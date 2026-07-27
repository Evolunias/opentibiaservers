import NonPvpCanobServerKeywordPage, { generateMetadata } from './non-pvp-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpCanobServerKeywordPage />;
}
