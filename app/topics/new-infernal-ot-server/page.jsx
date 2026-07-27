import NewInfernalOtServerKeywordPage, { generateMetadata } from './new-infernal-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtServerKeywordPage />;
}
