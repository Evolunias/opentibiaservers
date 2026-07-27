import MediviaUkServersKeywordPage, { generateMetadata } from './medivia-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaUkServersKeywordPage />;
}
