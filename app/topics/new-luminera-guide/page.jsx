import NewLumineraGuideKeywordPage, { generateMetadata } from './new-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewLumineraGuideKeywordPage />;
}
