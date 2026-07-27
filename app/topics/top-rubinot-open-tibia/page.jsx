import TopRubinotOpenTibiaKeywordPage, { generateMetadata } from './top-rubinot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopRubinotOpenTibiaKeywordPage />;
}
