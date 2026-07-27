import NewInfernalOtLoginKeywordPage, { generateMetadata } from './new-infernal-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtLoginKeywordPage />;
}
