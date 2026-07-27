import SerenityMexicoServerKeywordPage, { generateMetadata } from './serenity-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityMexicoServerKeywordPage />;
}
