import OfficialClassicusOtKeywordPage, { generateMetadata } from './official-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialClassicusOtKeywordPage />;
}
