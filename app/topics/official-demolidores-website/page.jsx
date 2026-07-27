import OfficialDemolidoresWebsiteKeywordPage, { generateMetadata } from './official-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresWebsiteKeywordPage />;
}
