import OlderaCustomMapServerPolandKeywordPage, { generateMetadata } from './oldera-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaCustomMapServerPolandKeywordPage />;
}
