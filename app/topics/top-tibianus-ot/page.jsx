import TopTibianusOtKeywordPage, { generateMetadata } from './top-tibianus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibianusOtKeywordPage />;
}
