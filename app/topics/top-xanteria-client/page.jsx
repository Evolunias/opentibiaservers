import TopXanteriaClientKeywordPage, { generateMetadata } from './top-xanteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaClientKeywordPage />;
}
