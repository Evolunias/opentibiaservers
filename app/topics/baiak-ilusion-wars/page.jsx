import BaiakIlusionWarsKeywordPage, { generateMetadata } from './baiak-ilusion-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakIlusionWarsKeywordPage />;
}
