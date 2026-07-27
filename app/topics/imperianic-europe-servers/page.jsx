import ImperianicEuropeServersKeywordPage, { generateMetadata } from './imperianic-europe-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicEuropeServersKeywordPage />;
}
