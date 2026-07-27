import OldSchoolZezeniaOnlineWebsiteKeywordPage, { generateMetadata } from './old-school-zezenia-online-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolZezeniaOnlineWebsiteKeywordPage />;
}
