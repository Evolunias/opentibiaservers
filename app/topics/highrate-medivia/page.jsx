import HighrateMediviaKeywordPage, { generateMetadata } from './highrate-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaKeywordPage />;
}
