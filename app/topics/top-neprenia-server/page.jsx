import TopNepreniaServerKeywordPage, { generateMetadata } from './top-neprenia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaServerKeywordPage />;
}
