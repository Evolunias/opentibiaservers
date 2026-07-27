import NostaltherCustomMapServerArgentinaKeywordPage, { generateMetadata } from './nostalther-custom-map-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherCustomMapServerArgentinaKeywordPage />;
}
