import NonPvpAlasteraServerKeywordPage, { generateMetadata } from './non-pvp-alastera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpAlasteraServerKeywordPage />;
}
