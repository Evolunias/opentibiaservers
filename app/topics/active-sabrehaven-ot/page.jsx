import ActiveSabrehavenOtKeywordPage, { generateMetadata } from './active-sabrehaven-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenOtKeywordPage />;
}
