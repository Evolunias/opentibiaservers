import SabrehavenChileServersKeywordPage, { generateMetadata } from './sabrehaven-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenChileServersKeywordPage />;
}
