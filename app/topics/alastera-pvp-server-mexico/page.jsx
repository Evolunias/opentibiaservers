import AlasteraPvpServerMexicoKeywordPage, { generateMetadata } from './alastera-pvp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpServerMexicoKeywordPage />;
}
