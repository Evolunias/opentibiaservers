import LowExpOtServerArgentinaKeywordPage, { generateMetadata } from './low-exp-ot-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerArgentinaKeywordPage />;
}
