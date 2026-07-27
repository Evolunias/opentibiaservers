import CustomMapOtServerEuropeKeywordPage, { generateMetadata } from './custom-map-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerEuropeKeywordPage />;
}
