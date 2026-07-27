import CustomMapClientNorthAmericaKeywordPage, { generateMetadata } from './custom-map-client-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientNorthAmericaKeywordPage />;
}
