import TibiaoriginsUkServersKeywordPage, { generateMetadata } from './tibiaorigins-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsUkServersKeywordPage />;
}
