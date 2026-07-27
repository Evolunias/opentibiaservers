import TopImperianicLoginKeywordPage, { generateMetadata } from './top-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopImperianicLoginKeywordPage />;
}
