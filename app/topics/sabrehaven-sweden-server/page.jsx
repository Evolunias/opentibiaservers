import SabrehavenSwedenServerKeywordPage, { generateMetadata } from './sabrehaven-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSwedenServerKeywordPage />;
}
