import CurrentOlderaOtKeywordPage, { generateMetadata } from './current-oldera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaOtKeywordPage />;
}
