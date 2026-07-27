import CurrentThorniaClientKeywordPage, { generateMetadata } from './current-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaClientKeywordPage />;
}
