import NonPvpClientLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpClientLatinAmericaKeywordPage />;
}
