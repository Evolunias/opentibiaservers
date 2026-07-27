import PopularNilotOtsKeywordPage, { generateMetadata } from './popular-nilot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotOtsKeywordPage />;
}
