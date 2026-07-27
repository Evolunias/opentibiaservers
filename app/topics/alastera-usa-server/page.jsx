import AlasteraUsaServerKeywordPage, { generateMetadata } from './alastera-usa-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraUsaServerKeywordPage />;
}
