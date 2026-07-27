import PopularOxygenotServerKeywordPage, { generateMetadata } from './popular-oxygenot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotServerKeywordPage />;
}
