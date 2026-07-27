import OfficialRealestaLoginKeywordPage, { generateMetadata } from './official-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaLoginKeywordPage />;
}
