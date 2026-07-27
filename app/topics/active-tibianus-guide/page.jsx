import ActiveTibianusGuideKeywordPage, { generateMetadata } from './active-tibianus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusGuideKeywordPage />;
}
