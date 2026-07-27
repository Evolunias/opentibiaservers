import AlasteraUkServerKeywordPage, { generateMetadata } from './alastera-uk-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraUkServerKeywordPage />;
}
