import OfficialRealeraGuideKeywordPage, { generateMetadata } from './official-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealeraGuideKeywordPage />;
}
