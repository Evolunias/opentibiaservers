import LowExpOtServerBrazilKeywordPage, { generateMetadata } from './low-exp-ot-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerBrazilKeywordPage />;
}
