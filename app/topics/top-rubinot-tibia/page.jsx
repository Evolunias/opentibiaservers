import TopRubinotTibiaKeywordPage, { generateMetadata } from './top-rubinot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotTibiaKeywordPage />;
}
