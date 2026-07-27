import TopLumineraServerKeywordPage, { generateMetadata } from './top-luminera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraServerKeywordPage />;
}
