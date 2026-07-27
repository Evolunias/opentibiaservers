import InfernalOtRealMapKeywordPage, { generateMetadata } from './infernal-ot-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtRealMapKeywordPage />;
}
