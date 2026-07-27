import LumineraPolandServerKeywordPage, { generateMetadata } from './luminera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraPolandServerKeywordPage />;
}
