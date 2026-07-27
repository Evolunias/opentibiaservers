import CustomMapServerListLatinAmericaKeywordPage, { generateMetadata } from './custom-map-server-list-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapServerListLatinAmericaKeywordPage />;
}
