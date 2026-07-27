import TibiantisBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './tibiantis-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisBaiakServerLatinAmericaKeywordPage />;
}
