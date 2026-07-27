import OlderaMapKeywordPage, { generateMetadata } from './oldera-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaMapKeywordPage />;
}
