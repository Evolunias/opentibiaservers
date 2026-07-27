import PvpGuideBrazilKeywordPage, { generateMetadata } from './pvp-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideBrazilKeywordPage />;
}
