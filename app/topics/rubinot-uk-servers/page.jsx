import RubinotUkServersKeywordPage, { generateMetadata } from './rubinot-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotUkServersKeywordPage />;
}
