import SerenityPolandServersKeywordPage, { generateMetadata } from './serenity-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityPolandServersKeywordPage />;
}
