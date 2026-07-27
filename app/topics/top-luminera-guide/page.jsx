import TopLumineraGuideKeywordPage, { generateMetadata } from './top-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraGuideKeywordPage />;
}
