import AlasteraFranceServerKeywordPage, { generateMetadata } from './alastera-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraFranceServerKeywordPage />;
}
