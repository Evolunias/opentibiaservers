import NewInfernalOtClientKeywordPage, { generateMetadata } from './new-infernal-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtClientKeywordPage />;
}
