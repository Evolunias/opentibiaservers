import CustomMapOtServerArgentinaKeywordPage, { generateMetadata } from './custom-map-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapOtServerArgentinaKeywordPage />;
}
