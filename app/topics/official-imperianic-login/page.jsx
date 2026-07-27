import OfficialImperianicLoginKeywordPage, { generateMetadata } from './official-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialImperianicLoginKeywordPage />;
}
