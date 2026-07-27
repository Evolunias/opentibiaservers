import TopAlasteraOfficialKeywordPage, { generateMetadata } from './top-alastera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraOfficialKeywordPage />;
}
