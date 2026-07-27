import ImperianicChileServersKeywordPage, { generateMetadata } from './imperianic-chile-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicChileServersKeywordPage />;
}
