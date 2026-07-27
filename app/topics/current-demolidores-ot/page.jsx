import CurrentDemolidoresOtKeywordPage, { generateMetadata } from './current-demolidores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresOtKeywordPage />;
}
