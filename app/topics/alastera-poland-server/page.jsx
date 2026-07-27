import AlasteraPolandServerKeywordPage, { generateMetadata } from './alastera-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraPolandServerKeywordPage />;
}
