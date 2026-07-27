import TibiascapeMapKeywordPage, { generateMetadata } from './tibiascape-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeMapKeywordPage />;
}
