import OldSchoolRookgaardTalesOnlineKeywordPage, { generateMetadata } from './old-school-rookgaard-tales-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRookgaardTalesOnlineKeywordPage />;
}
