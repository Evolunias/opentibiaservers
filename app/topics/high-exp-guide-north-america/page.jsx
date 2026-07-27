import HighExpGuideNorthAmericaKeywordPage, { generateMetadata } from './high-exp-guide-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpGuideNorthAmericaKeywordPage />;
}
