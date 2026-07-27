import NewCanobGuideKeywordPage, { generateMetadata } from './new-canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCanobGuideKeywordPage />;
}
