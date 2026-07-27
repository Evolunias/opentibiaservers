import HighExpSeasonSwedenKeywordPage, { generateMetadata } from './high-exp-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpSeasonSwedenKeywordPage />;
}
