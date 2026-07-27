import MediviaNoResetServerUsaKeywordPage, { generateMetadata } from './medivia-no-reset-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaNoResetServerUsaKeywordPage />;
}
