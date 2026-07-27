import OfficialOlderaOtKeywordPage, { generateMetadata } from './official-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialOlderaOtKeywordPage />;
}
