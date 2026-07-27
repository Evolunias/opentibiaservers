import ActiveSabrehavenLoginKeywordPage, { generateMetadata } from './active-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenLoginKeywordPage />;
}
