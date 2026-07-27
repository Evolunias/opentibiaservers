import HighrateSabrehavenKeywordPage, { generateMetadata } from './highrate-sabrehaven';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSabrehavenKeywordPage />;
}
