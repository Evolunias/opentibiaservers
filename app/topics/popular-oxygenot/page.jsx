import PopularOxygenotKeywordPage, { generateMetadata } from './popular-oxygenot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotKeywordPage />;
}
