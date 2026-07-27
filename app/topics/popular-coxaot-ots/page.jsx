import PopularCoxaotOtsKeywordPage, { generateMetadata } from './popular-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotOtsKeywordPage />;
}
