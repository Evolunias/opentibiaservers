import TopSabrehavenServerKeywordPage, { generateMetadata } from './top-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenServerKeywordPage />;
}
