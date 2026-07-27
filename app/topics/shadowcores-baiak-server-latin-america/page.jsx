import ShadowcoresBaiakServerLatinAmericaKeywordPage, { generateMetadata } from './shadowcores-baiak-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresBaiakServerLatinAmericaKeywordPage />;
}
