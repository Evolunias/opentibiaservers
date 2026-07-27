import HighrateSerenityLoginKeywordPage, { generateMetadata } from './highrate-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSerenityLoginKeywordPage />;
}
