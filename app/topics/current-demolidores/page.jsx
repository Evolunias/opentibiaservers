import CurrentDemolidoresKeywordPage, { generateMetadata } from './current-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresKeywordPage />;
}
