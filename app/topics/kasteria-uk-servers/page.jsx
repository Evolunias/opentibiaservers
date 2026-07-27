import KasteriaUkServersKeywordPage, { generateMetadata } from './kasteria-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaUkServersKeywordPage />;
}
