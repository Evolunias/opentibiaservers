import DuraOnlineAlternativesKeywordPage, { generateMetadata } from './dura-online-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineAlternativesKeywordPage />;
}
