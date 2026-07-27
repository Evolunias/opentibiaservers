import TopNilotOfficialKeywordPage, { generateMetadata } from './top-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotOfficialKeywordPage />;
}
