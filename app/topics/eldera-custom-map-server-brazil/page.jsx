import ElderaCustomMapServerBrazilKeywordPage, { generateMetadata } from './eldera-custom-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaCustomMapServerBrazilKeywordPage />;
}
