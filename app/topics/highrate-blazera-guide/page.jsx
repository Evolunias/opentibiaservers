import HighrateBlazeraGuideKeywordPage, { generateMetadata } from './highrate-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraGuideKeywordPage />;
}
