import InfernalOtResetKeywordPage, { generateMetadata } from './infernal-ot-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtResetKeywordPage />;
}
