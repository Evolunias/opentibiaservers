import NewSabrehavenOtServerKeywordPage, { generateMetadata } from './new-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSabrehavenOtServerKeywordPage />;
}
