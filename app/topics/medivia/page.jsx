import MediviaKeywordPage, { generateMetadata } from './medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaKeywordPage />;
}
