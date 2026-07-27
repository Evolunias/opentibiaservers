import TopSabrehavenClientKeywordPage, { generateMetadata } from './top-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenClientKeywordPage />;
}
