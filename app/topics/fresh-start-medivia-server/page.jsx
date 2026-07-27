import FreshStartMediviaServerKeywordPage, { generateMetadata } from './fresh-start-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaServerKeywordPage />;
}
