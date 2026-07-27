import NewYurotsGuideKeywordPage, { generateMetadata } from './new-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewYurotsGuideKeywordPage />;
}
