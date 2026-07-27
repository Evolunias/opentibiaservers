import ActiveTibianusWebsiteKeywordPage, { generateMetadata } from './active-tibianus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusWebsiteKeywordPage />;
}
