import PopularAureraGlobalTibiaKeywordPage, { generateMetadata } from './popular-aurera-global-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalTibiaKeywordPage />;
}
