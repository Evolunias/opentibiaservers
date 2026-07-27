import OlderaHighExpKeywordPage, { generateMetadata } from './oldera-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaHighExpKeywordPage />;
}
