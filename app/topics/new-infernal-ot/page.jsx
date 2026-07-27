import NewInfernalOtKeywordPage, { generateMetadata } from './new-infernal-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtKeywordPage />;
}
