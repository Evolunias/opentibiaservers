import FreshStartMediviaClientKeywordPage, { generateMetadata } from './fresh-start-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaClientKeywordPage />;
}
