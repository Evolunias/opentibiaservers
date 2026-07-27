import ActiveCanobGuideKeywordPage, { generateMetadata } from './active-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCanobGuideKeywordPage />;
}
