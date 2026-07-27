import LumineraOtsKeywordPage, { generateMetadata } from './luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LumineraOtsKeywordPage />;
}
