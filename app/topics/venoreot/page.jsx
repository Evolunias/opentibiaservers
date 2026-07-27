import VenoreotKeywordPage, { generateMetadata } from './venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotKeywordPage />;
}
