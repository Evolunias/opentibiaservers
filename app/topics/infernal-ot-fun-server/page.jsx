import InfernalOtFunServerKeywordPage, { generateMetadata } from './infernal-ot-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtFunServerKeywordPage />;
}
