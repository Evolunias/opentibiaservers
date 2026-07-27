import SerenityGermanyServersKeywordPage, { generateMetadata } from './serenity-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityGermanyServersKeywordPage />;
}
