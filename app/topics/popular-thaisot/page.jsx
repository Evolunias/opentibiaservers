import PopularThaisotKeywordPage, { generateMetadata } from './popular-thaisot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularThaisotKeywordPage />;
}
