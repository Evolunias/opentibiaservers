import CurrentNilotOtsKeywordPage, { generateMetadata } from './current-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNilotOtsKeywordPage />;
}
