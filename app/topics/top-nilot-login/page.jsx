import TopNilotLoginKeywordPage, { generateMetadata } from './top-nilot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotLoginKeywordPage />;
}
