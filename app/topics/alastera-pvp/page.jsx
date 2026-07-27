import AlasteraPvpKeywordPage, { generateMetadata } from './alastera-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpKeywordPage />;
}
