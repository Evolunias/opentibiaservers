import TibiaraGuideKeywordPage, { generateMetadata } from './tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraGuideKeywordPage />;
}
