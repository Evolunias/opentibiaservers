import TibiantisLoginKeywordPage, { generateMetadata } from './tibiantis-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisLoginKeywordPage />;
}
