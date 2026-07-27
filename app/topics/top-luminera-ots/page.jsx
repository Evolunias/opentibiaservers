import TopLumineraOtsKeywordPage, { generateMetadata } from './top-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraOtsKeywordPage />;
}
