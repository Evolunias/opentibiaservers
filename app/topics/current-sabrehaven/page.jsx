import CurrentSabrehavenKeywordPage, { generateMetadata } from './current-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenKeywordPage />;
}
