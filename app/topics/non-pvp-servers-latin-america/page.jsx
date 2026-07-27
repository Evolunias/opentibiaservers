import NonPvpServersLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-servers-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpServersLatinAmericaKeywordPage />;
}
