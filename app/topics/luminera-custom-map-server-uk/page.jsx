import LumineraCustomMapServerUkKeywordPage, { generateMetadata } from './luminera-custom-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCustomMapServerUkKeywordPage />;
}
