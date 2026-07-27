import PopularClassicusOtKeywordPage, { generateMetadata } from './popular-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusOtKeywordPage />;
}
