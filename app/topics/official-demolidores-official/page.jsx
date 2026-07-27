import OfficialDemolidoresOfficialKeywordPage, { generateMetadata } from './official-demolidores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialDemolidoresOfficialKeywordPage />;
}
