import TopLumineraOfficialKeywordPage, { generateMetadata } from './top-luminera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraOfficialKeywordPage />;
}
