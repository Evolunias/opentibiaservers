import TopMediviaServerKeywordPage, { generateMetadata } from './top-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaServerKeywordPage />;
}
