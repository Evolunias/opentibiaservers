import SerenityChileServersKeywordPage, { generateMetadata } from './serenity-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityChileServersKeywordPage />;
}
