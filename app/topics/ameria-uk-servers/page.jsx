import AmeriaUkServersKeywordPage, { generateMetadata } from './ameria-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaUkServersKeywordPage />;
}
