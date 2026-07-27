import CustomMapOtServerUsaKeywordPage, { generateMetadata } from './custom-map-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerUsaKeywordPage />;
}
