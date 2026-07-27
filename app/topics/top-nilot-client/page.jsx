import TopNilotClientKeywordPage, { generateMetadata } from './top-nilot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotClientKeywordPage />;
}
