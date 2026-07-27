import NostaltherCustomMapServerNorthAmericaKeywordPage, { generateMetadata } from './nostalther-custom-map-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherCustomMapServerNorthAmericaKeywordPage />;
}
