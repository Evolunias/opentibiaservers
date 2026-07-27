import OtServersRealMapKeywordPage, { generateMetadata } from './ot-servers-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServersRealMapKeywordPage />;
}
