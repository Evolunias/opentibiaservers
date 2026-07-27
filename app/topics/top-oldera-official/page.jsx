import TopOlderaOfficialKeywordPage, { generateMetadata } from './top-oldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaOfficialKeywordPage />;
}
