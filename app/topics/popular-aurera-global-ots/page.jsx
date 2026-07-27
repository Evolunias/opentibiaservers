import PopularAureraGlobalOtsKeywordPage, { generateMetadata } from './popular-aurera-global-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAureraGlobalOtsKeywordPage />;
}
