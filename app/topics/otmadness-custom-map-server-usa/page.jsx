import OtmadnessCustomMapServerUsaKeywordPage, { generateMetadata } from './otmadness-custom-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessCustomMapServerUsaKeywordPage />;
}
