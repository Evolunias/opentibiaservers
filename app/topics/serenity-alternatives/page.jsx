import SerenityAlternativesKeywordPage, { generateMetadata } from './serenity-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityAlternativesKeywordPage />;
}
