import LumineraWorldKeywordPage, { generateMetadata } from './luminera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraWorldKeywordPage />;
}
