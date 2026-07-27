import CustomMapMadnessaliveServerKeywordPage, { generateMetadata } from './custom-map-madnessalive-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapMadnessaliveServerKeywordPage />;
}
