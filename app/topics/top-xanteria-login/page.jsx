import TopXanteriaLoginKeywordPage, { generateMetadata } from './top-xanteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaLoginKeywordPage />;
}
