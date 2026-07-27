import LowExpCarlinotServerKeywordPage, { generateMetadata } from './low-exp-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpCarlinotServerKeywordPage />;
}
