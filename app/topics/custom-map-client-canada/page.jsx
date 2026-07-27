import CustomMapClientCanadaKeywordPage, { generateMetadata } from './custom-map-client-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapClientCanadaKeywordPage />;
}
