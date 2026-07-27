import LowExpSeasonSwedenKeywordPage, { generateMetadata } from './low-exp-season-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpSeasonSwedenKeywordPage />;
}
