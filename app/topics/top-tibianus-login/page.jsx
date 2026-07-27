import TopTibianusLoginKeywordPage, { generateMetadata } from './top-tibianus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusLoginKeywordPage />;
}
