import LowrateEvoleraOtServerKeywordPage, { generateMetadata } from './lowrate-evolera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraOtServerKeywordPage />;
}
