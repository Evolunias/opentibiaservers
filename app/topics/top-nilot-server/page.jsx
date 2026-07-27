import TopNilotServerKeywordPage, { generateMetadata } from './top-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotServerKeywordPage />;
}
