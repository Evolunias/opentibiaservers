import TopTibianusOpenTibiaKeywordPage, { generateMetadata } from './top-tibianus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusOpenTibiaKeywordPage />;
}
