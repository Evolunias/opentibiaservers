import TitaniaHistoryKeywordPage, { generateMetadata } from './titania-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaHistoryKeywordPage />;
}
