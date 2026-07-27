import AlasteraStatusKeywordPage, { generateMetadata } from './alastera-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraStatusKeywordPage />;
}
