import NonPvpXanteriaServerKeywordPage, { generateMetadata } from './non-pvp-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpXanteriaServerKeywordPage />;
}
