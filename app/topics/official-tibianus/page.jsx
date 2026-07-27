import OfficialTibianusKeywordPage, { generateMetadata } from './official-tibianus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusKeywordPage />;
}
