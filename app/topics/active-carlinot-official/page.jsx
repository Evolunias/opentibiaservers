import ActiveCarlinotOfficialKeywordPage, { generateMetadata } from './active-carlinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCarlinotOfficialKeywordPage />;
}
