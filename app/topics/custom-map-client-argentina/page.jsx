import CustomMapClientArgentinaKeywordPage, { generateMetadata } from './custom-map-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientArgentinaKeywordPage />;
}
