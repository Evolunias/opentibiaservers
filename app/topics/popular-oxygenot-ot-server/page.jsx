import PopularOxygenotOtServerKeywordPage, { generateMetadata } from './popular-oxygenot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotOtServerKeywordPage />;
}
