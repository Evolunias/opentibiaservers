import OfficialTibianusServerKeywordPage, { generateMetadata } from './official-tibianus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibianusServerKeywordPage />;
}
