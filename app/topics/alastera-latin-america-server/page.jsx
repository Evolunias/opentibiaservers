import AlasteraLatinAmericaServerKeywordPage, { generateMetadata } from './alastera-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraLatinAmericaServerKeywordPage />;
}
