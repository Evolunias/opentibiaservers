import LowrateLumineraGuideKeywordPage, { generateMetadata } from './lowrate-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateLumineraGuideKeywordPage />;
}
