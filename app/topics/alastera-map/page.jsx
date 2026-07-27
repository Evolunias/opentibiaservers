import AlasteraMapKeywordPage, { generateMetadata } from './alastera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraMapKeywordPage />;
}
