import PopularAureraGlobalLoginKeywordPage, { generateMetadata } from './popular-aurera-global-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalLoginKeywordPage />;
}
