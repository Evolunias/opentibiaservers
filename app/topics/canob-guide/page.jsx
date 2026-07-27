import CanobGuideKeywordPage, { generateMetadata } from './canob-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobGuideKeywordPage />;
}
