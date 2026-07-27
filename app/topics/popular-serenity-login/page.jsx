import PopularSerenityLoginKeywordPage, { generateMetadata } from './popular-serenity-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityLoginKeywordPage />;
}
