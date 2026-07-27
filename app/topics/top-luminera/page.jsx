import TopLumineraKeywordPage, { generateMetadata } from './top-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraKeywordPage />;
}
