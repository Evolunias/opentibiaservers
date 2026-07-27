import CurrentSabrehavenLoginKeywordPage, { generateMetadata } from './current-sabrehaven-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenLoginKeywordPage />;
}
