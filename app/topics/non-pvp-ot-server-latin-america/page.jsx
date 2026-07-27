import NonPvpOtServerLatinAmericaKeywordPage, { generateMetadata } from './non-pvp-ot-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerLatinAmericaKeywordPage />;
}
