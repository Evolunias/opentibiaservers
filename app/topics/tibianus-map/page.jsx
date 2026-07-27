import TibianusMapKeywordPage, { generateMetadata } from './tibianus-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusMapKeywordPage />;
}
