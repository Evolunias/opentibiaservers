import PopularClassicusOtsKeywordPage, { generateMetadata } from './popular-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusOtsKeywordPage />;
}
