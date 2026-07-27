import ActiveThorniaGuideKeywordPage, { generateMetadata } from './active-thornia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaGuideKeywordPage />;
}
