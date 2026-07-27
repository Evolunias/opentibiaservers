import CustomMapClientBrazilKeywordPage, { generateMetadata } from './custom-map-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientBrazilKeywordPage />;
}
