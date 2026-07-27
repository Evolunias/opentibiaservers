import FreshStartSerenityLoginKeywordPage, { generateMetadata } from './fresh-start-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityLoginKeywordPage />;
}
