import OtservlistRealMapKeywordPage, { generateMetadata } from './otservlist-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistRealMapKeywordPage />;
}
