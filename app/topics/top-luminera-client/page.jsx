import TopLumineraClientKeywordPage, { generateMetadata } from './top-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraClientKeywordPage />;
}
