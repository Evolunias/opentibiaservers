import OfficialTibijkaLoginKeywordPage, { generateMetadata } from './official-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibijkaLoginKeywordPage />;
}
