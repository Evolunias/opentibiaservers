import CustomMapOtServerUkKeywordPage, { generateMetadata } from './custom-map-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerUkKeywordPage />;
}
