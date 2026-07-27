import TopNepreniaLoginKeywordPage, { generateMetadata } from './top-neprenia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaLoginKeywordPage />;
}
