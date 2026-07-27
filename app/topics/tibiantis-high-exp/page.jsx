import TibiantisHighExpKeywordPage, { generateMetadata } from './tibiantis-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisHighExpKeywordPage />;
}
