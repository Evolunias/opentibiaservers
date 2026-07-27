import LowrateThorniaWebsiteKeywordPage, { generateMetadata } from './lowrate-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThorniaWebsiteKeywordPage />;
}
