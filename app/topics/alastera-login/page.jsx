import AlasteraLoginKeywordPage, { generateMetadata } from './alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraLoginKeywordPage />;
}
