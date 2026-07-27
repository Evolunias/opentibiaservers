import NilotCustomMapServerCanadaKeywordPage, { generateMetadata } from './nilot-custom-map-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotCustomMapServerCanadaKeywordPage />;
}
