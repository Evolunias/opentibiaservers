import NostaltherCustomMapServerFranceKeywordPage, { generateMetadata } from './nostalther-custom-map-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherCustomMapServerFranceKeywordPage />;
}
