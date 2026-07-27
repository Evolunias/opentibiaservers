import HighrateNilotLoginKeywordPage, { generateMetadata } from './highrate-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotLoginKeywordPage />;
}
