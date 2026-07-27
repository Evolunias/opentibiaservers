import TopDemolidoresOfficialKeywordPage, { generateMetadata } from './top-demolidores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresOfficialKeywordPage />;
}
