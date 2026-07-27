import HighrateNilotOtServerKeywordPage, { generateMetadata } from './highrate-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotOtServerKeywordPage />;
}
