import PopularUnlineOtServerKeywordPage, { generateMetadata } from './popular-unline-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineOtServerKeywordPage />;
}
