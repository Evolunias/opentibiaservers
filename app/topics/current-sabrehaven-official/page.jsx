import CurrentSabrehavenOfficialKeywordPage, { generateMetadata } from './current-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSabrehavenOfficialKeywordPage />;
}
