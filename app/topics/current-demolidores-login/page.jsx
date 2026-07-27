import CurrentDemolidoresLoginKeywordPage, { generateMetadata } from './current-demolidores-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresLoginKeywordPage />;
}
