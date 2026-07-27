import ActiveUnlineGuideKeywordPage, { generateMetadata } from './active-unline-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineGuideKeywordPage />;
}
