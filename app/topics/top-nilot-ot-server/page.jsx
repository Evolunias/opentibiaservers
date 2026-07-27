import TopNilotOtServerKeywordPage, { generateMetadata } from './top-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotOtServerKeywordPage />;
}
