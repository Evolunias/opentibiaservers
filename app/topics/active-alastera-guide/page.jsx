import ActiveAlasteraGuideKeywordPage, { generateMetadata } from './active-alastera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraGuideKeywordPage />;
}
