import CurrentAlasteraOtsKeywordPage, { generateMetadata } from './current-alastera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraOtsKeywordPage />;
}
