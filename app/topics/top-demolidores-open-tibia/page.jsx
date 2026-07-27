import TopDemolidoresOpenTibiaKeywordPage, { generateMetadata } from './top-demolidores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopDemolidoresOpenTibiaKeywordPage />;
}
