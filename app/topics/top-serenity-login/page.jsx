import TopSerenityLoginKeywordPage, { generateMetadata } from './top-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSerenityLoginKeywordPage />;
}
