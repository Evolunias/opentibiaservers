import MistOfDeathUkServersKeywordPage, { generateMetadata } from './mist-of-death-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathUkServersKeywordPage />;
}
