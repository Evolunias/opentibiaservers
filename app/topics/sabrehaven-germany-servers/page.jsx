import SabrehavenGermanyServersKeywordPage, { generateMetadata } from './sabrehaven-germany-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenGermanyServersKeywordPage />;
}
