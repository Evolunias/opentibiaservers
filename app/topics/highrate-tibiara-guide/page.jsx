import HighrateTibiaraGuideKeywordPage, { generateMetadata } from './highrate-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraGuideKeywordPage />;
}
