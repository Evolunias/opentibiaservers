import ActiveNilotOfficialKeywordPage, { generateMetadata } from './active-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveNilotOfficialKeywordPage />;
}
