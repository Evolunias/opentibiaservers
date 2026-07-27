import ThaisotUkServersKeywordPage, { generateMetadata } from './thaisot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotUkServersKeywordPage />;
}
