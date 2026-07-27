import PvpeGuideBrazilKeywordPage, { generateMetadata } from './pvpe-guide-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeGuideBrazilKeywordPage />;
}
