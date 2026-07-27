import LowrateSaintsotGuideKeywordPage, { generateMetadata } from './lowrate-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotGuideKeywordPage />;
}
