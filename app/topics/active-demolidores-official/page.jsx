import ActiveDemolidoresOfficialKeywordPage, { generateMetadata } from './active-demolidores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresOfficialKeywordPage />;
}
