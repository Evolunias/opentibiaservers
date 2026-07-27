import ActiveVenoreotKeywordPage, { generateMetadata } from './active-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotKeywordPage />;
}
