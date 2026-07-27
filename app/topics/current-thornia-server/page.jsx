import CurrentThorniaServerKeywordPage, { generateMetadata } from './current-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaServerKeywordPage />;
}
