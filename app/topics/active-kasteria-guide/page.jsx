import ActiveKasteriaGuideKeywordPage, { generateMetadata } from './active-kasteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveKasteriaGuideKeywordPage />;
}
