import TopTibianusKeywordPage, { generateMetadata } from './top-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusKeywordPage />;
}
