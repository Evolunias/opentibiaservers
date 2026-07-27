import AlasteraPvpServerNorthAmericaKeywordPage, { generateMetadata } from './alastera-pvp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpServerNorthAmericaKeywordPage />;
}
