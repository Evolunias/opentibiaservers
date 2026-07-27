import LowExpSeasonUkKeywordPage, { generateMetadata } from './low-exp-season-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonUkKeywordPage />;
}
