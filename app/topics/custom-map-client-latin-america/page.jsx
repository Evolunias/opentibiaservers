import CustomMapClientLatinAmericaKeywordPage, { generateMetadata } from './custom-map-client-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientLatinAmericaKeywordPage />;
}
