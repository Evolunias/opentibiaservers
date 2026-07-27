import ThorniaCustomMapServerArgentinaKeywordPage, { generateMetadata } from './thornia-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCustomMapServerArgentinaKeywordPage />;
}
