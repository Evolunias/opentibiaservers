import ActiveLumineraGuideKeywordPage, { generateMetadata } from './active-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveLumineraGuideKeywordPage />;
}
