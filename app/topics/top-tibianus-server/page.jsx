import TopTibianusServerKeywordPage, { generateMetadata } from './top-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusServerKeywordPage />;
}
