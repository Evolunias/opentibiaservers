import SabrehavenPolandServersKeywordPage, { generateMetadata } from './sabrehaven-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenPolandServersKeywordPage />;
}
