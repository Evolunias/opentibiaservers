import CurrentVenoreotLoginKeywordPage, { generateMetadata } from './current-venoreot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotLoginKeywordPage />;
}
