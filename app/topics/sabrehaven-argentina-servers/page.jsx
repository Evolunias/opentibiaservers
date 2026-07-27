import SabrehavenArgentinaServersKeywordPage, { generateMetadata } from './sabrehaven-argentina-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenArgentinaServersKeywordPage />;
}
