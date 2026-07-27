import MediviaHighExpServerUsaKeywordPage, { generateMetadata } from './medivia-high-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaHighExpServerUsaKeywordPage />;
}
