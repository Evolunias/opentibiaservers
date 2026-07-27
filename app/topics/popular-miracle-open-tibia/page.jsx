import PopularMiracleOpenTibiaKeywordPage, { generateMetadata } from './popular-miracle-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMiracleOpenTibiaKeywordPage />;
}
