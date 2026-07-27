import LowrateBlazeraGuideKeywordPage, { generateMetadata } from './lowrate-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateBlazeraGuideKeywordPage />;
}
