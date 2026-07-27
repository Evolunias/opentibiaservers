import NilotFranceServersKeywordPage, { generateMetadata } from './nilot-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotFranceServersKeywordPage />;
}
