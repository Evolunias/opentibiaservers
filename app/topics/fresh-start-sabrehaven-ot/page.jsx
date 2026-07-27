import FreshStartSabrehavenOtKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenOtKeywordPage />;
}
