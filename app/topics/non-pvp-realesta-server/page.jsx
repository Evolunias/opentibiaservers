import NonPvpRealestaServerKeywordPage, { generateMetadata } from './non-pvp-realesta-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpRealestaServerKeywordPage />;
}
