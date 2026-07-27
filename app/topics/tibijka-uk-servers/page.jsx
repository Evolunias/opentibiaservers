import TibijkaUkServersKeywordPage, { generateMetadata } from './tibijka-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaUkServersKeywordPage />;
}
