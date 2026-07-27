import CustomMapServerListNorthAmericaKeywordPage, { generateMetadata } from './custom-map-server-list-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListNorthAmericaKeywordPage />;
}
