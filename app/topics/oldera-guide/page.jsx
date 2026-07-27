import OlderaGuideKeywordPage, { generateMetadata } from './oldera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaGuideKeywordPage />;
}
