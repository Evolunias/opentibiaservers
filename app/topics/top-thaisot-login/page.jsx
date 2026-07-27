import TopThaisotLoginKeywordPage, { generateMetadata } from './top-thaisot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotLoginKeywordPage />;
}
