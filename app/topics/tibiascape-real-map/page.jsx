import TibiascapeRealMapKeywordPage, { generateMetadata } from './tibiascape-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeRealMapKeywordPage />;
}
