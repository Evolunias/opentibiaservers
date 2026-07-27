import NostaltherCustomMapServerBrazilKeywordPage, { generateMetadata } from './nostalther-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherCustomMapServerBrazilKeywordPage />;
}
