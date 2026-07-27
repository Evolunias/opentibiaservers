import ActiveSabrehavenClientKeywordPage, { generateMetadata } from './active-sabrehaven-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenClientKeywordPage />;
}
