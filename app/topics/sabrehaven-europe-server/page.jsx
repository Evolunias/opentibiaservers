import SabrehavenEuropeServerKeywordPage, { generateMetadata } from './sabrehaven-europe-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenEuropeServerKeywordPage />;
}
