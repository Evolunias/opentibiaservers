import HighrateNilotClientKeywordPage, { generateMetadata } from './highrate-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotClientKeywordPage />;
}
