import ActiveRealestaGuideKeywordPage, { generateMetadata } from './active-realesta-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaGuideKeywordPage />;
}
