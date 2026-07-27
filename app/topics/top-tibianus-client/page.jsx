import TopTibianusClientKeywordPage, { generateMetadata } from './top-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusClientKeywordPage />;
}
