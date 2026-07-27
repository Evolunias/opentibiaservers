import SabrehavenUsaServerKeywordPage, { generateMetadata } from './sabrehaven-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenUsaServerKeywordPage />;
}
