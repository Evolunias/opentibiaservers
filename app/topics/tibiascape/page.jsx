import TibiascapeKeywordPage, { generateMetadata } from './tibiascape';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeKeywordPage />;
}
