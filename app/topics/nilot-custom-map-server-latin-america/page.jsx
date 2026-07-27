import NilotCustomMapServerLatinAmericaKeywordPage, { generateMetadata } from './nilot-custom-map-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCustomMapServerLatinAmericaKeywordPage />;
}
