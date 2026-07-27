import FreshStartSabrehavenLoginKeywordPage, { generateMetadata } from './fresh-start-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSabrehavenLoginKeywordPage />;
}
