import PopularOxygenotLoginKeywordPage, { generateMetadata } from './popular-oxygenot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotLoginKeywordPage />;
}
