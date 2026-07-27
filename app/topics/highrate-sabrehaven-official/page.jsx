import HighrateSabrehavenOfficialKeywordPage, { generateMetadata } from './highrate-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenOfficialKeywordPage />;
}
