import LowrateTibiaraGuideKeywordPage, { generateMetadata } from './lowrate-tibiara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraGuideKeywordPage />;
}
