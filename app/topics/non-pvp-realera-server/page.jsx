import NonPvpRealeraServerKeywordPage, { generateMetadata } from './non-pvp-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRealeraServerKeywordPage />;
}
