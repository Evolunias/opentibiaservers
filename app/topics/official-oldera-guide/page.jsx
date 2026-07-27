import OfficialOlderaGuideKeywordPage, { generateMetadata } from './official-oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaGuideKeywordPage />;
}
