import LowExpOtServerUkKeywordPage, { generateMetadata } from './low-exp-ot-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerUkKeywordPage />;
}
