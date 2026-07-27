import CurrentThorniaOtsKeywordPage, { generateMetadata } from './current-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentThorniaOtsKeywordPage />;
}
