import RealestaUkServersKeywordPage, { generateMetadata } from './realesta-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaUkServersKeywordPage />;
}
