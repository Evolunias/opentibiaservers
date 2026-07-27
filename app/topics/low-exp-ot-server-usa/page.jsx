import LowExpOtServerUsaKeywordPage, { generateMetadata } from './low-exp-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerUsaKeywordPage />;
}
