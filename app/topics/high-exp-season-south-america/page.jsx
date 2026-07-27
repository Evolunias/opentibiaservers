import HighExpSeasonSouthAmericaKeywordPage, { generateMetadata } from './high-exp-season-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonSouthAmericaKeywordPage />;
}
