import OfficialClassicusServerKeywordPage, { generateMetadata } from './official-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusServerKeywordPage />;
}
