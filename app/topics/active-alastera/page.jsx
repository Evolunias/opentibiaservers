import ActiveAlasteraKeywordPage, { generateMetadata } from './active-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraKeywordPage />;
}
