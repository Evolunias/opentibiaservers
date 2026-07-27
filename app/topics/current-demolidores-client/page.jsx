import CurrentDemolidoresClientKeywordPage, { generateMetadata } from './current-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresClientKeywordPage />;
}
