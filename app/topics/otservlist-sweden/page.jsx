import OtservlistSwedenKeywordPage, { generateMetadata } from './otservlist-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtservlistSwedenKeywordPage />;
}
