import ActiveTibiascapeGuideKeywordPage, { generateMetadata } from './active-tibiascape-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiascapeGuideKeywordPage />;
}
