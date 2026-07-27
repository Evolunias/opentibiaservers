import InfernalOtChileServerKeywordPage, { generateMetadata } from './infernal-ot-chile-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtChileServerKeywordPage />;
}
