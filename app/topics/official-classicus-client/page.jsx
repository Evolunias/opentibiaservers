import OfficialClassicusClientKeywordPage, { generateMetadata } from './official-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusClientKeywordPage />;
}
