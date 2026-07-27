import TopCarlinotLoginKeywordPage, { generateMetadata } from './top-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCarlinotLoginKeywordPage />;
}
