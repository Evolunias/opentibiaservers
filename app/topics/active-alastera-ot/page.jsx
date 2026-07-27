import ActiveAlasteraOtKeywordPage, { generateMetadata } from './active-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraOtKeywordPage />;
}
