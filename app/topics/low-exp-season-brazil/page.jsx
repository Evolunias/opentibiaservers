import LowExpSeasonBrazilKeywordPage, { generateMetadata } from './low-exp-season-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonBrazilKeywordPage />;
}
