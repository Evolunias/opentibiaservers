import SerenitySeasonKeywordPage, { generateMetadata } from './serenity-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SerenitySeasonKeywordPage />;
}
