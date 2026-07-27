import PopularDemolidoresOpenTibiaKeywordPage, { generateMetadata } from './popular-demolidores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresOpenTibiaKeywordPage />;
}
