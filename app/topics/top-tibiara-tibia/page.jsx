import TopTibiaraTibiaKeywordPage, { generateMetadata } from './top-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraTibiaKeywordPage />;
}
