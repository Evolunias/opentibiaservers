import CurrentAlasteraKeywordPage, { generateMetadata } from './current-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraKeywordPage />;
}
