import ActiveSabrehavenOfficialKeywordPage, { generateMetadata } from './active-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenOfficialKeywordPage />;
}
