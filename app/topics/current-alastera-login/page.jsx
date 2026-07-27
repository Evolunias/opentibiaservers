import CurrentAlasteraLoginKeywordPage, { generateMetadata } from './current-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraLoginKeywordPage />;
}
