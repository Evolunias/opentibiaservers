import TopNilotKeywordPage, { generateMetadata } from './top-nilot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotKeywordPage />;
}
