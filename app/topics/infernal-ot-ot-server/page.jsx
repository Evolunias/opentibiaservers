import InfernalOtOtServerKeywordPage, { generateMetadata } from './infernal-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOtServerKeywordPage />;
}
