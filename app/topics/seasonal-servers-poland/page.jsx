import SeasonalServersPolandKeywordPage, { generateMetadata } from './seasonal-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalServersPolandKeywordPage />;
}
