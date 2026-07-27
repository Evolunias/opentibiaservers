import MediviaHighExpKeywordPage, { generateMetadata } from './medivia-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaHighExpKeywordPage />;
}
