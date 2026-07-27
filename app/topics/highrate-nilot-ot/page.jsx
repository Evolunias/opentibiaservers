import HighrateNilotOtKeywordPage, { generateMetadata } from './highrate-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotOtKeywordPage />;
}
