import NonPvpElderaServerKeywordPage, { generateMetadata } from './non-pvp-eldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpElderaServerKeywordPage />;
}
