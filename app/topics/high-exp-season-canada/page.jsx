import HighExpSeasonCanadaKeywordPage, { generateMetadata } from './high-exp-season-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonCanadaKeywordPage />;
}
