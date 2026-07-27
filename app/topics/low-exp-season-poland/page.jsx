import LowExpSeasonPolandKeywordPage, { generateMetadata } from './low-exp-season-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonPolandKeywordPage />;
}
