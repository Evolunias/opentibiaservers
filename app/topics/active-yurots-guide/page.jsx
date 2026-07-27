import ActiveYurotsGuideKeywordPage, { generateMetadata } from './active-yurots-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsGuideKeywordPage />;
}
