import TopNepreniaKeywordPage, { generateMetadata } from './top-neprenia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNepreniaKeywordPage />;
}
