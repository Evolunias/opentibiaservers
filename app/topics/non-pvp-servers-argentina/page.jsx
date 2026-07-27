import NonPvpServersArgentinaKeywordPage, { generateMetadata } from './non-pvp-servers-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersArgentinaKeywordPage />;
}
