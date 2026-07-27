import SabrehavenUkServersKeywordPage, { generateMetadata } from './sabrehaven-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenUkServersKeywordPage />;
}
