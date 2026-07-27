import ActiveAlasteraOfficialKeywordPage, { generateMetadata } from './active-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraOfficialKeywordPage />;
}
