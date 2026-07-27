import HighrateTibijkaGuideKeywordPage, { generateMetadata } from './highrate-tibijka-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibijkaGuideKeywordPage />;
}
