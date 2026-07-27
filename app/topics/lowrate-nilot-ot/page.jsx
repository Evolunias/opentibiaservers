import LowrateNilotOtKeywordPage, { generateMetadata } from './lowrate-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateNilotOtKeywordPage />;
}
