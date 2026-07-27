import InfernalOtSwedenServerKeywordPage, { generateMetadata } from './infernal-ot-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtSwedenServerKeywordPage />;
}
