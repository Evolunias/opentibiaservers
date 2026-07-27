import TibijkaHighExpKeywordPage, { generateMetadata } from './tibijka-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaHighExpKeywordPage />;
}
