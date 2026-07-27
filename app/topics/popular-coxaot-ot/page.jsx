import PopularCoxaotOtKeywordPage, { generateMetadata } from './popular-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotOtKeywordPage />;
}
