import NonPvpAureraGlobalServerKeywordPage, { generateMetadata } from './non-pvp-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpAureraGlobalServerKeywordPage />;
}
