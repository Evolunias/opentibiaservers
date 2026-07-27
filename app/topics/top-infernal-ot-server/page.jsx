import TopInfernalOtServerKeywordPage, { generateMetadata } from './top-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtServerKeywordPage />;
}
