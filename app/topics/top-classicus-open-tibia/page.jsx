import TopClassicusOpenTibiaKeywordPage, { generateMetadata } from './top-classicus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusOpenTibiaKeywordPage />;
}
