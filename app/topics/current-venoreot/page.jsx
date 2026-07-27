import CurrentVenoreotKeywordPage, { generateMetadata } from './current-venoreot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotKeywordPage />;
}
