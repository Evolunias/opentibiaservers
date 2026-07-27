import TopRealestaOfficialKeywordPage, { generateMetadata } from './top-realesta-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRealestaOfficialKeywordPage />;
}
