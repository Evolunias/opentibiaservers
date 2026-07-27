import TopMediviaKeywordPage, { generateMetadata } from './top-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaKeywordPage />;
}
