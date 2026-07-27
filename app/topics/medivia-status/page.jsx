import MediviaStatusKeywordPage, { generateMetadata } from './medivia-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaStatusKeywordPage />;
}
