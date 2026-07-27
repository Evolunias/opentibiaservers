import ActiveSabrehavenServerKeywordPage, { generateMetadata } from './active-sabrehaven-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveSabrehavenServerKeywordPage />;
}
