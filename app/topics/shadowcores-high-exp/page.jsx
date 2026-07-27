import ShadowcoresHighExpKeywordPage, { generateMetadata } from './shadowcores-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShadowcoresHighExpKeywordPage />;
}
