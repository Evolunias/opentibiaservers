import HighrateLumineraGuideKeywordPage, { generateMetadata } from './highrate-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateLumineraGuideKeywordPage />;
}
