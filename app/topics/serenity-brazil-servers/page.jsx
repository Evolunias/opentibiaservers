import SerenityBrazilServersKeywordPage, { generateMetadata } from './serenity-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityBrazilServersKeywordPage />;
}
