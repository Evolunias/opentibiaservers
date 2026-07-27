import SerenityEuropeServerKeywordPage, { generateMetadata } from './serenity-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityEuropeServerKeywordPage />;
}
