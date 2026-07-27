import ActiveSabrehavenOtServerKeywordPage, { generateMetadata } from './active-sabrehaven-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenOtServerKeywordPage />;
}
