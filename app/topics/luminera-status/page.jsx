import LumineraStatusKeywordPage, { generateMetadata } from './luminera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraStatusKeywordPage />;
}
