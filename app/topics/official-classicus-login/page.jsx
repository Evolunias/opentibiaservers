import OfficialClassicusLoginKeywordPage, { generateMetadata } from './official-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusLoginKeywordPage />;
}
