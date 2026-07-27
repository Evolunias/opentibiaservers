import AureraGlobalUkServersKeywordPage, { generateMetadata } from './aurera-global-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalUkServersKeywordPage />;
}
