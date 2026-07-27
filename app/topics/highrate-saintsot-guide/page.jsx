import HighrateSaintsotGuideKeywordPage, { generateMetadata } from './highrate-saintsot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotGuideKeywordPage />;
}
