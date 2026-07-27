import ImperianicPolandServersKeywordPage, { generateMetadata } from './imperianic-poland-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicPolandServersKeywordPage />;
}
