import OfficialTibianusClientKeywordPage, { generateMetadata } from './official-tibianus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusClientKeywordPage />;
}
