import VenoreotHighExpKeywordPage, { generateMetadata } from './venoreot-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotHighExpKeywordPage />;
}
