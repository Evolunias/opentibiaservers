import CurrentVenoreotClientKeywordPage, { generateMetadata } from './current-venoreot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentVenoreotClientKeywordPage />;
}
