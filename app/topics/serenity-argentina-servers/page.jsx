import SerenityArgentinaServersKeywordPage, { generateMetadata } from './serenity-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityArgentinaServersKeywordPage />;
}
