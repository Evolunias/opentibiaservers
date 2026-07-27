import SerenityFranceServersKeywordPage, { generateMetadata } from './serenity-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenityFranceServersKeywordPage />;
}
