import HighExpCarlinotServerKeywordPage, { generateMetadata } from './high-exp-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpCarlinotServerKeywordPage />;
}
