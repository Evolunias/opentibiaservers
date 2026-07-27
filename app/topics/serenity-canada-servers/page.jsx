import SerenityCanadaServersKeywordPage, { generateMetadata } from './serenity-canada-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityCanadaServersKeywordPage />;
}
