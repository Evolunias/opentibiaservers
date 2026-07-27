import ActiveAlasteraLoginKeywordPage, { generateMetadata } from './active-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraLoginKeywordPage />;
}
