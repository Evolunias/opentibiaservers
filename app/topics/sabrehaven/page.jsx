import SabrehavenKeywordPage, { generateMetadata } from './sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenKeywordPage />;
}
