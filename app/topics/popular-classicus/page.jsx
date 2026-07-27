import PopularClassicusKeywordPage, { generateMetadata } from './popular-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusKeywordPage />;
}
