import AlasteraPvpeKeywordPage, { generateMetadata } from './alastera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPvpeKeywordPage />;
}
