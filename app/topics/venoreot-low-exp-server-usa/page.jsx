import VenoreotLowExpServerUsaKeywordPage, { generateMetadata } from './venoreot-low-exp-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotLowExpServerUsaKeywordPage />;
}
