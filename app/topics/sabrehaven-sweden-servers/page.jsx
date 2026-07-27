import SabrehavenSwedenServersKeywordPage, { generateMetadata } from './sabrehaven-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSwedenServersKeywordPage />;
}
