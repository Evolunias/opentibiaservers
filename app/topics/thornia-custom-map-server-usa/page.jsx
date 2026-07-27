import ThorniaCustomMapServerUsaKeywordPage, { generateMetadata } from './thornia-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaCustomMapServerUsaKeywordPage />;
}
