import InfernalOtLoginKeywordPage, { generateMetadata } from './infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtLoginKeywordPage />;
}
