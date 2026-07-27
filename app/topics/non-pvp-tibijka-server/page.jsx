import NonPvpTibijkaServerKeywordPage, { generateMetadata } from './non-pvp-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpTibijkaServerKeywordPage />;
}
