import LumineraCustomMapServerArgentinaKeywordPage, { generateMetadata } from './luminera-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCustomMapServerArgentinaKeywordPage />;
}
