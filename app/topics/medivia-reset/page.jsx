import MediviaResetKeywordPage, { generateMetadata } from './medivia-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaResetKeywordPage />;
}
