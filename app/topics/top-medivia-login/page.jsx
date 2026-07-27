import TopMediviaLoginKeywordPage, { generateMetadata } from './top-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaLoginKeywordPage />;
}
