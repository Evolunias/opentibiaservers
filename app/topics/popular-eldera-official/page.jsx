import PopularElderaOfficialKeywordPage, { generateMetadata } from './popular-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaOfficialKeywordPage />;
}
