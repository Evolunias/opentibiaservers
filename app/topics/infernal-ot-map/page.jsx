import InfernalOtMapKeywordPage, { generateMetadata } from './infernal-ot-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtMapKeywordPage />;
}
