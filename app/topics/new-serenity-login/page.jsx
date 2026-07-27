import NewSerenityLoginKeywordPage, { generateMetadata } from './new-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSerenityLoginKeywordPage />;
}
