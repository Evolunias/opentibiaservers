import CurrentAlasteraOtServerKeywordPage, { generateMetadata } from './current-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraOtServerKeywordPage />;
}
