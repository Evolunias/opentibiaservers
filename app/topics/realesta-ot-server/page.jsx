import RealestaOtServerKeywordPage, { generateMetadata } from './realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaOtServerKeywordPage />;
}
