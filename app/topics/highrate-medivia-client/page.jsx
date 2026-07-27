import HighrateMediviaClientKeywordPage, { generateMetadata } from './highrate-medivia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaClientKeywordPage />;
}
