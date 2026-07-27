import LowExpSeasonGermanyKeywordPage, { generateMetadata } from './low-exp-season-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonGermanyKeywordPage />;
}
