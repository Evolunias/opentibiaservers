import PopularAureraGlobalKeywordPage, { generateMetadata } from './popular-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalKeywordPage />;
}
