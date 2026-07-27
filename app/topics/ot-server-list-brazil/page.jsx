import OtServerListBrazilKeywordPage, { generateMetadata } from './ot-server-list-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtServerListBrazilKeywordPage />;
}
