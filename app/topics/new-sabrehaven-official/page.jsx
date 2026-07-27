import NewSabrehavenOfficialKeywordPage, { generateMetadata } from './new-sabrehaven-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenOfficialKeywordPage />;
}
