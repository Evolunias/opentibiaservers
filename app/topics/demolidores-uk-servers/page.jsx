import DemolidoresUkServersKeywordPage, { generateMetadata } from './demolidores-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresUkServersKeywordPage />;
}
