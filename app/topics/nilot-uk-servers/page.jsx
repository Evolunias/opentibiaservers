import NilotUkServersKeywordPage, { generateMetadata } from './nilot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NilotUkServersKeywordPage />;
}
