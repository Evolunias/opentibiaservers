import PopularAureraGlobalClientKeywordPage, { generateMetadata } from './popular-aurera-global-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalClientKeywordPage />;
}
