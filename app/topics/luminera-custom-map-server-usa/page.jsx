import LumineraCustomMapServerUsaKeywordPage, { generateMetadata } from './luminera-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraCustomMapServerUsaKeywordPage />;
}
