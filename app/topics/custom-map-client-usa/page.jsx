import CustomMapClientUsaKeywordPage, { generateMetadata } from './custom-map-client-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientUsaKeywordPage />;
}
