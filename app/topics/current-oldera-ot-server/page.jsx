import CurrentOlderaOtServerKeywordPage, { generateMetadata } from './current-oldera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaOtServerKeywordPage />;
}
