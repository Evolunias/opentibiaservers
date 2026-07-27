import NilotOfficialKeywordPage, { generateMetadata } from './nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotOfficialKeywordPage />;
}
