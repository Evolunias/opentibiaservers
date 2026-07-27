import AlasteraUkServersKeywordPage, { generateMetadata } from './alastera-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraUkServersKeywordPage />;
}
