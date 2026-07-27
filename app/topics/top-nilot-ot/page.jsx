import TopNilotOtKeywordPage, { generateMetadata } from './top-nilot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNilotOtKeywordPage />;
}
