import CustomMapStatusLatinAmericaKeywordPage, { generateMetadata } from './custom-map-status-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapStatusLatinAmericaKeywordPage />;
}
