import CurrentCyntaraOtKeywordPage, { generateMetadata } from './current-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraOtKeywordPage />;
}
