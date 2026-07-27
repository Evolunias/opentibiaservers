import LumineraClientKeywordPage, { generateMetadata } from './luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraClientKeywordPage />;
}
