import LowExpMediviaServerKeywordPage, { generateMetadata } from './low-exp-medivia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpMediviaServerKeywordPage />;
}
