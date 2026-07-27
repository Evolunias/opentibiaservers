import InfernalOtOtKeywordPage, { generateMetadata } from './infernal-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtOtKeywordPage />;
}
