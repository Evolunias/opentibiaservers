import OfficialClassicusKeywordPage, { generateMetadata } from './official-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusKeywordPage />;
}
