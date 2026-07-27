import LowrateNilotOtServerKeywordPage, { generateMetadata } from './lowrate-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotOtServerKeywordPage />;
}
