import TibianusRealMapKeywordPage, { generateMetadata } from './tibianus-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusRealMapKeywordPage />;
}
