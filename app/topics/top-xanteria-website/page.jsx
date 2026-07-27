import TopXanteriaWebsiteKeywordPage, { generateMetadata } from './top-xanteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopXanteriaWebsiteKeywordPage />;
}
