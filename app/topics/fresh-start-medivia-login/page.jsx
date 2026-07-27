import FreshStartMediviaLoginKeywordPage, { generateMetadata } from './fresh-start-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaLoginKeywordPage />;
}
