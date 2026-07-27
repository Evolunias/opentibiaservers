import ActiveDemolidoresWebsiteKeywordPage, { generateMetadata } from './active-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresWebsiteKeywordPage />;
}
