import HighrateNilotServerKeywordPage, { generateMetadata } from './highrate-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotServerKeywordPage />;
}
