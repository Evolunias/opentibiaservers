import FreshStartSabrehavenKeywordPage, { generateMetadata } from './fresh-start-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenKeywordPage />;
}
