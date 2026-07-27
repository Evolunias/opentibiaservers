import SabrehavenCanadaServerKeywordPage, { generateMetadata } from './sabrehaven-canada-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenCanadaServerKeywordPage />;
}
