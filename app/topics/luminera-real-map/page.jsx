import LumineraRealMapKeywordPage, { generateMetadata } from './luminera-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraRealMapKeywordPage />;
}
