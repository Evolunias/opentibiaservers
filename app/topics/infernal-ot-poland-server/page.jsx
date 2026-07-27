import InfernalOtPolandServerKeywordPage, { generateMetadata } from './infernal-ot-poland-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtPolandServerKeywordPage />;
}
