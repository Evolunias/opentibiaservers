import PopularClassicusLoginKeywordPage, { generateMetadata } from './popular-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusLoginKeywordPage />;
}
