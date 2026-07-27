import UnlineUkServersKeywordPage, { generateMetadata } from './unline-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineUkServersKeywordPage />;
}
