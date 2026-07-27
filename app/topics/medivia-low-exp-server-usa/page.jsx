import MediviaLowExpServerUsaKeywordPage, { generateMetadata } from './medivia-low-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLowExpServerUsaKeywordPage />;
}
