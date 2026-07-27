import CustomMapCalmeraOtServerKeywordPage, { generateMetadata } from './custom-map-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapCalmeraOtServerKeywordPage />;
}
