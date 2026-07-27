import HighExpSeasonNorthAmericaKeywordPage, { generateMetadata } from './high-exp-season-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonNorthAmericaKeywordPage />;
}
