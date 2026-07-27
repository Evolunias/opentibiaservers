import CustomMapClientUkKeywordPage, { generateMetadata } from './custom-map-client-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientUkKeywordPage />;
}
