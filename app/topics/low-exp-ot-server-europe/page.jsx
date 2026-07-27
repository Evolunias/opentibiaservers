import LowExpOtServerEuropeKeywordPage, { generateMetadata } from './low-exp-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpOtServerEuropeKeywordPage />;
}
