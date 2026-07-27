import OfficialElderaGuideKeywordPage, { generateMetadata } from './official-eldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaGuideKeywordPage />;
}
