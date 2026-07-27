import NepreniaPvpServerNorthAmericaKeywordPage, { generateMetadata } from './neprenia-pvp-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaPvpServerNorthAmericaKeywordPage />;
}
