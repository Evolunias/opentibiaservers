import LumineraHighExpKeywordPage, { generateMetadata } from './luminera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraHighExpKeywordPage />;
}
