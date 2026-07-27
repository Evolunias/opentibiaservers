import FreshStartMediviaKeywordPage, { generateMetadata } from './fresh-start-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaKeywordPage />;
}
