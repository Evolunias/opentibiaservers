import LumineraMapKeywordPage, { generateMetadata } from './luminera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraMapKeywordPage />;
}
