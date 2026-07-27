import TibianusUkServersKeywordPage, { generateMetadata } from './tibianus-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusUkServersKeywordPage />;
}
