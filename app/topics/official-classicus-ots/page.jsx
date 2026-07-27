import OfficialClassicusOtsKeywordPage, { generateMetadata } from './official-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusOtsKeywordPage />;
}
