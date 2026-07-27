import CurrentSerenityLoginKeywordPage, { generateMetadata } from './current-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSerenityLoginKeywordPage />;
}
