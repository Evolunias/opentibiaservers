import HighExpVenoreotServerKeywordPage, { generateMetadata } from './high-exp-venoreot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpVenoreotServerKeywordPage />;
}
