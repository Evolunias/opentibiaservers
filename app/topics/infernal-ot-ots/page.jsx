import InfernalOtOtsKeywordPage, { generateMetadata } from './infernal-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOtsKeywordPage />;
}
