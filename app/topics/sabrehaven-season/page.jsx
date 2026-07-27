import SabrehavenSeasonKeywordPage, { generateMetadata } from './sabrehaven-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSeasonKeywordPage />;
}
