import NewSabrehavenKeywordPage, { generateMetadata } from './new-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenKeywordPage />;
}
