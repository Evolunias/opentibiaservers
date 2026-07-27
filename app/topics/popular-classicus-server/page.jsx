import PopularClassicusServerKeywordPage, { generateMetadata } from './popular-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusServerKeywordPage />;
}
