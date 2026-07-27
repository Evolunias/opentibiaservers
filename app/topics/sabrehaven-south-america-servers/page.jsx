import SabrehavenSouthAmericaServersKeywordPage, { generateMetadata } from './sabrehaven-south-america-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenSouthAmericaServersKeywordPage />;
}
