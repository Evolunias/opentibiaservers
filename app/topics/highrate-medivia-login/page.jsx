import HighrateMediviaLoginKeywordPage, { generateMetadata } from './highrate-medivia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaLoginKeywordPage />;
}
