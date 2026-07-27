import ImperianicFranceServersKeywordPage, { generateMetadata } from './imperianic-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicFranceServersKeywordPage />;
}
