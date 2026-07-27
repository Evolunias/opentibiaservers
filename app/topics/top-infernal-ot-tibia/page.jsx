import TopInfernalOtTibiaKeywordPage, { generateMetadata } from './top-infernal-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopInfernalOtTibiaKeywordPage />;
}
