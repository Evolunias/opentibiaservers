import TopLumineraOtKeywordPage, { generateMetadata } from './top-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopLumineraOtKeywordPage />;
}
