import CustomMapOtmadnessServersKeywordPage, { generateMetadata } from './custom-map-otmadness-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtmadnessServersKeywordPage />;
}
