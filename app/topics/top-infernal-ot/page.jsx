import TopInfernalOtKeywordPage, { generateMetadata } from './top-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtKeywordPage />;
}
