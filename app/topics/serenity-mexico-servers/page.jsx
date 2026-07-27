import SerenityMexicoServersKeywordPage, { generateMetadata } from './serenity-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityMexicoServersKeywordPage />;
}
