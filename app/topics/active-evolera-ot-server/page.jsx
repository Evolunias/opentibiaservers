import ActiveEvoleraOtServerKeywordPage, { generateMetadata } from './active-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEvoleraOtServerKeywordPage />;
}
