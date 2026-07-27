import OfficialRealestaKeywordPage, { generateMetadata } from './official-realesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialRealestaKeywordPage />;
}
