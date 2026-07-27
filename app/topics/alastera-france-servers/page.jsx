import AlasteraFranceServersKeywordPage, { generateMetadata } from './alastera-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraFranceServersKeywordPage />;
}
